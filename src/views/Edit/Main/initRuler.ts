interface initRulerItemOpt {
  canvas: HTMLCanvasElement;
  zoom: number;
  gap: number;
}

export function initRulerX(opt: initRulerItemOpt) {
  const { zoom, gap, canvas } = opt;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  // 假设当前缩放比例为0.5   canvas / 0.5  = 当前canvas代表的宽度
  const width = canvas.width;
  const height = canvas.height;
  const unitLength = width / zoom;

  ctx.clearRect(0, 0, width, height);
  ctx.strokeStyle = "#fff";
  ctx.fillStyle = "#fff";

  for (let i = 0; i <= unitLength; i += gap) {
    ctx.textBaseline = "top";
    ctx.textAlign = "center";
    ctx.beginPath();
    ctx.moveTo(i * zoom, 12);
    ctx.lineTo(i * zoom, 20);
    ctx.stroke();
    ctx.fillText(i + "", i * zoom, 2);
  }
}

export function initRulerY(opt: initRulerItemOpt) {
  const { canvas, zoom, gap } = opt;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const width = canvas.width;
  const height = canvas.height;
  const unitLength = height / zoom;

  console.log(unitLength);

  ctx.clearRect(0, 0, width, height);
  ctx.strokeStyle = "#fff";
  ctx.fillStyle = "#fff";

  for (let i = 0; i <= unitLength; i += gap) {
    ctx.save();

    console.log(i * zoom);
    ctx.textBaseline = "top";
    ctx.textAlign = "center";
    ctx.beginPath();
    ctx.moveTo(12, i * zoom);
    ctx.lineTo(20, i * zoom);
    ctx.stroke();
    ctx.translate(0, i * zoom);
    ctx.rotate((Math.PI / 180) * -90);

    ctx.translate(0, -(i * zoom));
    ctx.fillText(i + "", 0, i * zoom + 2);
    ctx.restore();
  }
}

interface initRulerOpt {
  ruleX: HTMLCanvasElement;
  ruleY: HTMLCanvasElement;
  zoom: number;
  gap: number;
}

export function initRuler(opt: initRulerOpt) {
  const { ruleX, ruleY, zoom, gap } = opt;
  initRulerX({ canvas: ruleX, zoom, gap });
  initRulerY({ canvas: ruleY, zoom, gap });
}
