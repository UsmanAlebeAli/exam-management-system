import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import "./card.css"; // Import your CSS file for styling

const TotalCandidatesCard = ({ totalCandidates }) => {
  return (
    <Card sx={{ backgroundColor: "#28a745", color: "white" }}>
      <CardContent>
        <div>
          <Typography variant="h5" className="candidate-count">
            {totalCandidates}
          </Typography>
          <Typography color="textSecondary" className="candidate-count">
            Total Candidates
          </Typography>
        </div>
        <SchoolIcon sx={{ fontSize: 40 }} className="icon" />
      </CardContent>
    </Card>
  );
};

export default TotalCandidatesCard;
