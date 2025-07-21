export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="text-center p-3 border-b border-amber-400">
        Get 50% off on all products if you sign in now.
      </div>
      {children}
    </div>
  );
}
