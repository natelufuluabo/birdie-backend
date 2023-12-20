# User Invitations

### Invite Users to Chat Room
### Endpoint: POST /api/chat-rooms/:roomId/invite
### Headers: Authorization: Bearer YOUR_JWT_TOKEN
#### Request:
- body : {
  "userId": "user_id_to_invite"
}

#### Response:
- Success (200 OK):
{
  "message": "Invitation sent successfully"
}

- Failure (4xx Bad Request):
{
  "error": "Failed to send invitation"
}

### Accept/Reject Invitations
### Endpoint: POST /api/chat-rooms/:roomId/invitations/:invitationId/accept
### Headers: Authorization: Bearer YOUR_JWT_TOKEN
#### Response:
- Success (200 OK):
{
  "message": "Invitation accepted successfully"
}

- Failure (4xx Bad Request):
{
  "error": "Failed to accept invitation"
}

### Endpoint: POST /api/chat-rooms/:roomId/invitations/:invitationId/reject
### Headers: Authorization: Bearer YOUR_JWT_TOKEN
#### Response:
- Success (200 OK):
{
  "message": "Invitation rejected successfully"
}

- Failure (4xx Bad Request):
{
  "error": "Failed to reject invitation"
}


