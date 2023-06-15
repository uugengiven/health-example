Quick example dashboard for grabbing health checks and auto-updating the page every 10 seconds.

The end points available are:

`https://basic-bundle-tight-firefly-f0dd.owners.workers.dev/health` returns an array of health info objects
```
[
    {
        name: "Database",
        status: "Healthy"
    },
    {
        name: "Homepage",
        status: "Healthy"
    },
    {
        name: "Noonlight",
        status: "Degraded"
    },
    {
        name: "911map",
        status: "Failed"
    }
]
```

`https://basic-bundle-tight-firefly-f0dd.owners.workers.dev/health/database` returns a single health object with a random status
```
{
    name: "Database",
    status: "Healthy" // any of  Healthy, Degraded, Failed
}
```

`https://basic-bundle-tight-firefly-f0dd.owners.workers.dev/health/noonlight` returns a single determinate health object
```
{
    name: "Noonlight",
    status: "Degraded"
}
```
