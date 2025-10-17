import { motion } from "framer-motion";

export default function ResultScreen({ imageUrl, onRestart }) {
  return (
    <motion.div
      className="text-center space-y-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-3xl font-lotrLower text-lotrParchment">
        How You Feel Visualized in Middle Earth
      </h2>

      <img
        src={imageUrl}
        alt="Generated LOTR vision"
        className="mx-auto rounded-2xl shadow-lg border-2 border-lotrGold w-full max-w-md"
      />

      <div className="space-x-4">
        <button
          onClick={() => {
            navigator.share
              ? navigator.share({ title: "My LOTR Vision", url: imageUrl })
              : window.open(imageUrl, "_blank");
          }}
          className="btn-primary"
        >
          <i class="fa-solid fa-share" style={{ color: "#E2E2DA" }}></i>
        </button>

        <button
          onClick={onRestart}
          className="btn-secondary"
        >
          <i class="fa-solid fa-rotate-right" style={{ color: "#0D0E0D" }}></i>
        </button>
      </div>
    </motion.div>
  );
}
