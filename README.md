Ticket MCP Dashboard
A small standalone project for sending tickets from the backend to the frontend as JSON. Tickets are stored in data/tickets.json, displayed in a browser dashboard, and can be marked as finished.

The project is designed so an MCP server or AI agent can be added later without changing the ticket JSON shape.

Run
npm install
npm start
Open:

http://localhost:4000
Project Structure
ticket-mcp-dashboard/
  server.js              Express API server
  data/tickets.json      Local JSON ticket storage
  public/index.html      Frontend dashboard
  public/app.js          Frontend API calls and ticket rendering
  public/styles.css      Dashboard styling
  package.json           Node project config
API
Health
GET /api/health
Returns app status and the JSON storage file path.

List Tickets
GET /api/tickets
GET /api/tickets?status=open
GET /api/tickets?source=RBI
Returns tickets and status counts.

Get One Ticket
GET /api/tickets/:id
Returns one ticket by ID.

Create Ticket
POST /api/tickets
Example body:

{
  "title": "Check SEC rule update",
  "source": "SEC",
  "priority": "high",
  "summary": "Compare the latest source update with our checklist."
}
Update Ticket
PATCH /api/tickets/:id
Example body:

{
  "status": "finished"
}
Valid statuses:

open, in_progress, blocked, finished, verified
Resolve Ticket
POST /api/tickets/:id/resolve
This marks the ticket as finished and writes resolver metadata into the JSON.

Example body:

{
  "type": "manual",
  "evidence": ["Finished from frontend dashboard"]
}
Ticket JSON Shape
{
  "id": "tkt_sec_rbi_001",
  "title": "Check RBI digital lending update",
  "source": "RBI",
  "summary": "Review recent RBI guidance.",
  "status": "open",
  "priority": "high",
  "createdAt": "2026-06-01T00:00:00.000Z",
  "updatedAt": "2026-06-01T00:00:00.000Z",
  "finishedAt": null,
  "resolver": {
    "type": "manual",
    "state": "not_started",
    "mcpServer": null,
    "agent": null,
    "lastRunId": null,
    "notes": "Ready for future MCP or AI agent execution."
  },
  "steps": [],
  "result": null
}
When a ticket is resolved, status becomes finished, finishedAt is set, and result is filled.

Future MCP or Agent Integration
The extension point is in server.js:

function createResolverRunner(config = {}) {
  return {
    resolve(ticket) {
      // Replace this placeholder with MCP or agent execution.
    },
  };
}
Later, this function can:

call an MCP server to fetch source regulations,
pass the fetched profile/data to an AI agent,
receive verification output,
write result, resolver.lastRunId, and status: "finished" back into tickets.json.
The frontend already reads these fields, so no dashboard rewrite is needed.
