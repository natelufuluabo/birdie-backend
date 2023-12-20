# Chat Room Management

### Create Chat Room
### Endpoint: POST /api/chat-rooms
#### Headers: Authorization: Bearer YOUR_JWT_TOKEN
#### Request:
- body : {
  "name": "new_chat_room",
  "visibility": "public",
  "description": "This is a public chat room."
}

#### Response:
- Success (201 Created):
{
  "id": "room_id",
  "name": "new_chat_room",
  "visibility": "public",
  "description": "This is a public chat room.",
  "owner": "example_user",
  "members": ["example_user"],
  "created_at": "timestamp"
}

- Failure (4xx Bad Request):
{
  "error": "Invalid data for chat room creation"
}

### List Chat Rooms
### Endpoint: GET /api/chat-rooms
#### Headers: Authorization: Bearer YOUR_JWT_TOKEN
#### Response:
- Success (200 OK):
[
  {
    "id": "room_id",
    "name": "public_room",
    "visibility": "public",
    "description": "This is a public chat room.",
    "owner": "example_user",
    "members": ["example_user1", "example_user2"],
    "created_at": "timestamp"
  },
  // ... other rooms
]

- Failure (401 Unauthorized):
{
  "error": "Unauthorized"
}

### Join/Leave Chat Room
### Endpoint: POST /api/chat-rooms/:roomId/join
#### Headers: Authorization: Bearer YOUR_JWT_TOKEN
#### Response:
- Success (200 OK):
{
  "message": "Successfully joined the chat room"
}

- Failure (4xx Bad Request):
{
  "error": "Failed to join the chat room"
}

### Endpoint: POST /api/chat-rooms/:roomId/leave
#### Headers: Authorization: Bearer YOUR_JWT_TOKEN
#### Response:
- Success (200 OK):
{
  "message": "Successfully left the chat room"
}

- Failure (4xx Bad Request):
{
  "error": "Failed to leave the chat room"
}

