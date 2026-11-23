function Background() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Soft color glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(99,102,241,0.12),_transparent_55%)]" />

      <div className="absolute -top-24 left-1/4 h-96 w-96 rounded-full bg-violet-200/30 blur-3xl" />

      <div className="absolute top-[35rem] -right-24 h-96 w-96 rounded-full bg-indigo-200/30 blur-3xl" />

      {/* Subtle technical grid */}
      <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(to_right,rgba(161,161,170,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(161,161,170,0.12)_1px,transparent_1px)] [background-size:48px_48px]" />
    </div>
  );
}

export default Background;