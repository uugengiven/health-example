import React from 'react';
import { useState, useEffect } from 'react';
import './HealthCheck.css';


type HealthCardProps = {
    name: string,
    status: string
}

function HealthCard({ name, status } : HealthCardProps) {
   return (
    <div className={"check " + status}>
      <h1>{name} - {status}</h1>
    </div>
  );
}

export default HealthCard;
