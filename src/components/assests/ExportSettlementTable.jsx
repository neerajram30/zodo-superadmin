import React from "react";
import { Link, useParams } from "react-router-dom";
import { useViewHospital } from "../../hooks/hospitals/useViewHospital";
import { useMutation } from "@tanstack/react-query";
import { exportHospitalSettlements } from "../../apis/settlements";
import { toast } from "react-toastify";
import { exporticon } from "../imagepath";
import PropTypes from "prop-types";

function ExportSettlementTable({query}) {
  const { id } = useParams();
  const { data: hospital } = useViewHospital(id);
  const hospitalName = hospital?.name ?? "";
  const exportMutation = useMutation({
    mutationFn: () => exportHospitalSettlements(id, `?${query}`),
    onSuccess: (data) => {
      if (!data || !(data instanceof Blob)) {
        toast.error("Failed to export data - invalid response format");
        return;
      }

      const url = window.URL.createObjectURL(data);
      const link = document.createElement("a");
      link.href = url;
      link.download = `${hospitalName}_tansactions_${
        new Date().toISOString().split("T")[0]
      }.xlsx`;

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
      toast.success("Transactions exported successfully!");
    },
    onError: (error) => {
      console.error("Export failed:", error);
      toast.error("Failed to export appointments. Please try again.");
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

// validate props
ExportSettlementTable.propTypes = {
  query: PropTypes.string,
};

export default ExportSettlementTable;
