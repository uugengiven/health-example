import React from 'react';
import { useState, useEffect, useRef } from 'react';
import './HealthCheck.css';
import HealthCard from './HealthCard';


type HealthCheckProps = {
  endpoint: string
}

type HealthInfo = {
  name: string,
  status: string
}

type MultiHealthInfo = Array<HealthInfo>

function HealthCheck({ endpoint } : HealthCheckProps) {
  const [status, setStatus] = useState<HealthInfo>({name: endpoint, status: "loading"});
  const intervalRef = useRef<number | null>(null);

  const checkHealth = async () => {
    // get endpoint
    console.log("Checking endpoints");
    fetch(endpoint)
      .then((res) => {
        if(!res.ok)
        {
          setStatus({name: endpoint, status: "Loading status failed"});
          console.log(res);
        }
        return res.json()
      })
      .then(json => {
        setStatus(json);
      })
  }  

  useEffect(() => {
    checkHealth();
    startInterval();

    return () => {
      stopInterval();
    }
  }, [])

  const startInterval = () => {
    if(intervalRef.current !== null) return; // make sure we're not setting multiple
    intervalRef.current = window.setInterval(checkHealth, 10000); // check every 10 seconds
  }

  const stopInterval = () => {
    if (intervalRef.current) {
      window.clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }

  return (
    <div className="check">
      <HealthCard name={status.name} status={status.status} />
    </div>
  );
}

function MultiHealthCheck({ endpoint } : HealthCheckProps) {
  const [status, setStatus] = useState<MultiHealthInfo>([{name: endpoint, status: "loading"}]);

  const checkHealth = async () => {
    // get endpoint
    fetch(endpoint)
      .then((res) => {
        if(!res.ok)
        {
          setStatus([{name: endpoint, status: "Loading status failed"}]);
          console.log(res);
        }
        return res.json()
      })
      .then(json => {
        setStatus(json);
      })
  }  

  useEffect(() => {
    checkHealth();
  }, [])

  return (
    <div className="check-area">
      {status.map(item => BuildHealthCard(item))}
    </div>
  );
}

function BuildHealthCard({name, status}: HealthInfo) {
  return (
    <div className="check">
      <HealthCard name={name} status={status} />
    </div>
  );
}

export {HealthCheck, MultiHealthCheck};
