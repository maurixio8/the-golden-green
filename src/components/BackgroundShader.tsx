"use client";

import { useEffect, useRef } from "react";

const vertexShaderSource = `
  attribute vec2 a_position;

  void main() {
    gl_Position = vec4(a_position, 0.0, 1.0);
  }
`;

const fragmentShaderSource = `
  precision mediump float;

  uniform vec2 u_resolution;
  uniform float u_time;

  float hash(vec2 p) {
    p = fract(p * vec2(123.34, 456.21));
    p += dot(p, p + 45.32);
    return fract(p.x * p.y);
  }

  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);

    return mix(
      mix(hash(i + vec2(0.0, 0.0)), hash(i + vec2(1.0, 0.0)), u.x),
      mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x),
      u.y
    );
  }

  float fbm(vec2 p) {
    float value = 0.0;
    float amplitude = 0.5;

    for (int i = 0; i < 5; i++) {
      value += amplitude * noise(p);
      p = p * 2.02 + 0.17;
      amplitude *= 0.48;
    }

    return value;
  }

  void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution.xy;
    vec2 p = uv * 2.0 - 1.0;
    p.x *= u_resolution.x / u_resolution.y;

    float breath = 0.5 + 0.5 * sin(u_time * 0.42);
    float drift = u_time * 0.045;
    float vapor = fbm(p * 1.35 + vec2(drift, -drift * 0.7));
    float vein = fbm(p * 2.7 - vec2(drift * 0.6, drift));
    float vignette = smoothstep(1.45, 0.12, length(p));

    vec3 base = vec3(0.023, 0.035, 0.023);
    vec3 olive = vec3(0.145, 0.235, 0.075);
    vec3 brand = vec3(0.325, 0.475, 0.115);
    vec3 gold = vec3(1.0, 0.66, 0.05);

    vec3 color = base;
    color += olive * vapor * (0.34 + breath * 0.16);
    color += brand * smoothstep(0.52, 0.92, vein) * 0.14;
    color += gold * smoothstep(0.82, 1.0, vapor) * 0.045;
    color *= 0.78 + vignette * 0.72;

    gl_FragColor = vec4(color, 1.0);
  }
`;

function compileShader(
  gl: WebGLRenderingContext,
  type: number,
  source: string,
) {
  const shader = gl.createShader(type);

  if (!shader) {
    return null;
  }

  gl.shaderSource(shader, source);
  gl.compileShader(shader);

  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    gl.deleteShader(shader);
    return null;
  }

  return shader;
}

export default function BackgroundShader() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const gl = canvas?.getContext("webgl", {
      alpha: false,
      antialias: false,
      depth: false,
      stencil: false,
    });

    if (!canvas || !gl) {
      return;
    }
    const canvasElement = canvas;
    const glContext: WebGLRenderingContext = gl;

    // Shader propio porque la referencia HTML conserva paleta/fuentes, pero no trae código WebGL.
    const vertexShader = compileShader(glContext, glContext.VERTEX_SHADER, vertexShaderSource);
    const fragmentShader = compileShader(glContext, glContext.FRAGMENT_SHADER, fragmentShaderSource);

    if (!vertexShader || !fragmentShader) {
      return;
    }

    const program = glContext.createProgram();

    if (!program) {
      return;
    }

    glContext.attachShader(program, vertexShader);
    glContext.attachShader(program, fragmentShader);
    glContext.linkProgram(program);

    if (!glContext.getProgramParameter(program, glContext.LINK_STATUS)) {
      return;
    }

    const positionLocation = glContext.getAttribLocation(program, "a_position");
    const resolutionLocation = glContext.getUniformLocation(program, "u_resolution");
    const timeLocation = glContext.getUniformLocation(program, "u_time");
    const buffer = glContext.createBuffer();
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let animationFrame = 0;

    glContext.bindBuffer(glContext.ARRAY_BUFFER, buffer);
    glContext.bufferData(
      glContext.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
      glContext.STATIC_DRAW,
    );

    function resize() {
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 1.5);
      const width = Math.floor(window.innerWidth * pixelRatio);
      const height = Math.floor(window.innerHeight * pixelRatio);

      if (canvasElement.width !== width || canvasElement.height !== height) {
        canvasElement.width = width;
        canvasElement.height = height;
      }

      glContext.viewport(0, 0, canvasElement.width, canvasElement.height);
    }

    function render(time: number) {
      resize();
      glContext.useProgram(program);
      glContext.enableVertexAttribArray(positionLocation);
      glContext.bindBuffer(glContext.ARRAY_BUFFER, buffer);
      glContext.vertexAttribPointer(positionLocation, 2, glContext.FLOAT, false, 0, 0);
      glContext.uniform2f(resolutionLocation, canvasElement.width, canvasElement.height);
      glContext.uniform1f(timeLocation, time * 0.001);
      glContext.drawArrays(glContext.TRIANGLES, 0, 6);

      if (!reduceMotion) {
        animationFrame = requestAnimationFrame(render);
      }
    }

    render(0);
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
      glContext.deleteProgram(program);
      glContext.deleteShader(vertexShader);
      glContext.deleteShader(fragmentShader);
      glContext.deleteBuffer(buffer);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 z-0 h-full w-full bg-ink"
    />
  );
}
