# Messaging

### Send Message
### Endpoint: POST /api/chat-rooms/:roomId/messages
### Headers: Authorization: Bearer YOUR_JWT_TOKEN
#### Request:
- body : {
  "content": "Hello, this is a message!"
}

#### Response
- Success (201 Created):
{
  "id": "message_id",
  "sender": "example_user",
  "content": "Hello, this is a message!",
  "timestamp": "timestamp"
}

- Failure (4xx Bad Request):
{
  "error": "Failed to send the message"
}

### Retrieve Messages
### Endpoint: GET /api/chat-rooms/:roomId/messages
### Headers: Authorization: Bearer YOUR_JWT_TOKEN
#### Response:
- Success (200 OK):
[
  {
    "id": "message_id",
    "sender": "example_user",
    "content": "Hello, this is a message!",
    "timestamp": "timestamp"
  },
  // ... other messages
]

- Failure (4xx Bad Request):
{
  "error": "Failed to retrieve messages"
}

