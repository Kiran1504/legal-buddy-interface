import { Upload as UploadIcon } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Upload() {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    // Handle file drop
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-2xl mx-auto"
    >
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`
          mt-8 p-12 rounded-lg border-2 border-dashed
          transition-colors duration-200 ease-in-out
          flex flex-col items-center justify-center gap-4
          ${isDragging ? "border-primary bg-primary/5" : "border-border"}
        `}
      >
        <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
          <UploadIcon className="h-6 w-6 text-primary" />
        </div>
        <div className="text-center">
          <h3 className="text-lg font-medium mb-1">Upload your document</h3>
          <p className="text-sm text-muted-foreground">
            Drag and drop your file here, or click to select
          </p>
        </div>
        <input
          type="file"
          className="hidden"
          id="file-upload"
          onChange={() => {}}
        />
        <label
          htmlFor="file-upload"
          className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 cursor-pointer"
        >
          Select File
        </label>
      </div>
    </motion.div>
  );
}