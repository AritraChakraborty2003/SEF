"use client";
interface DonateModalProps {
  open: boolean;
  onClose: () => void;
}
export default function DonateModal({ open, onClose }: DonateModalProps) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
      <div className="bg-white rounded-lg p-8 max-w-md w-full relative">
        <button className="absolute top-2 right-2 text-black" onClick={onClose}>
          &times;
        </button>
        <h3 className="text-2xl font-bold mb-4 text-yellow-400">
          Donate to Our Cause
        </h3>
        <form>
          <input
            type="number"
            placeholder="Amount"
            className="w-full mb-4 px-3 py-2 border border-gray-300 rounded"
          />
          <button
            type="submit"
            className="w-full bg-yellow-400 text-black font-bold px-4 py-2 rounded hover:bg-yellow-300 transition"
          >
            Donate
          </button>
        </form>
      </div>
    </div>
  );
}
