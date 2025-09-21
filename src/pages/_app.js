import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import "@/styles/global.css";

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={router.route}
        initial={{ opacity: 0, filter: "blur(20px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        exit={{ opacity: 0, filter: "blur(20px)" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
  );
}
