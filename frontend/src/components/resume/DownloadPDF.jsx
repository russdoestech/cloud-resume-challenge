// src/components/resume/DownloadPDF.jsx
export default function DownloadPDF() {
  return (
    <button
      onClick={() => window.print()}
      style={{
        margin: "16px 0",
        padding: "8px 16px",
        cursor: "pointer",
        fontSize: "14px"
      }}
    >
      Download PDF
    </button>
  );
}