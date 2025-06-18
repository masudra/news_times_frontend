import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const NotFoundPage = () => {
  const { t } = useTranslation();



  return (
    <div className=" -mb-10 min-h-screen bg-gradient-to-br from-red-100 via-white to-red-200 flex items-center justify-center p-6">
      <div className="text-center max-w-lg bg-white shadow-2xl rounded-3xl p-10 border border-red-300">
        <motion.h1
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-[120px] font-extrabold text-red-600 drop-shadow-lg"
        >
          404
        </motion.h1>

        <motion.p
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-3xl font-bold text-gray-800 mb-4"
        >
          {t("pageNotFound")}
        </motion.p>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-gray-600 mb-6"
        >
          {t("pageNotFoundDescription")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
        >
          <Link
            to="/"
            className="inline-block bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full text-lg font-semibold transition duration-300 shadow-md"
          >
            ⬅ {t("goBackHome")}
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFoundPage;
