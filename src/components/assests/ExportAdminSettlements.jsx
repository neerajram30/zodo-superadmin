import PropTypes from "prop-types";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { exporticon } from "../imagepath";
import { Link } from "react-router-dom";
import { exportAdminSettlements } from "../../apis/settlements";

function ExportAdminSettlements({ query }) {
  const exportMutation = useMutation({
    mutationFn: () => exportAdminSettlements(query),
    onSuccess: (data) => {
      if (!data || !(data instanceof Blob)) {
        toast.error("Failed to export data - invalid response format");
        return;
      }

      const url = window.URL.createObjectURL(data);
      const link = document.createElement("a");
      link.href = url;
      link.download = `admin_settlements_${
        new Date().toISOString().split("T")[0]
      }.xlsx`;

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);

      toast.success("Settlements exported successfully!");
    },
    onError: (error) => {
      console.error("Export failed:", error);
      toast.error("Failed to export settlements. Please try again.");
    },
  });

  const handleDownload = () => {
    exportMutation.mutate();
  };

  return (
    <div className="form-group local-forms">
      <Link
        to="#"
        className="outlined-btn form-control"
        onClick={(e) => {
          e.preventDefault();
          handleDownload();
        }}
        style={{
          opacity: exportMutation.isPending ? 0.6 : 1,
          pointerEvents: exportMutation.isPending ? "none" : "auto",
        }}
      >
        <img src={exporticon} alt="" />
        <span className="ms-2 me-2 text-primary">
          {exportMutation.isPending ? "Exporting..." : "Export"}
        </span>
      </Link>
    </div>
  );
}

ExportAdminSettlements.propTypes = {
  query: PropTypes.string,
};

export default ExportAdminSettlements;
