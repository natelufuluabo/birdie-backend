# User Authentication

### User Registration

#### Endpoint: POST /api/users/register
#### Request:
- body : {
  "username": "example_user",
  "email": "user@example.com",
  "password": "secure_password"
}

#### Response:
- Success (201 Created):
{
  "message": "User registered successfully"
}

- Failure (4xx Bad Request):
{
  "error": "Invalid registration data"
}

### User Login

#### Endpoint: POST /api/users/login
#### Request:
- body : {
  "username": "example_user",
  "password": "secure_password"
}

#### Response:
- Success (200 OK):
{
  "token": "YOUR_JWT_TOKEN",
  "message": "Login successful"
}

- Failure (401 Unauthorized):
{
  "error": "Invalid credentials"
}

### User Profile
#### Endpoint: GET /api/users/profile
#### Headers: Authorization: Bearer YOUR_JWT_TOKEN

#### Response:
- Success (200 OK):
{
  "username": "example_user",
  "email": "user@example.com",
  "profile_picture": "url_to_profile_picture"
}

- Failure (401 Unauthorized):
{
  "error": "Unauthorized"
}

#### Endpoint: PUT /api/users/profile
#### Headers: Authorization: Bearer YOUR_JWT_TOKEN
#### Request:
- body : {
  "username": "new_username",
  "email": "new_email@example.com"
}

#### Response:
- Success (200 OK):
{
  "message": "Profile updated successfully"
}

- Failure (4xx Bad Request):
{
  "error": "Invalid data for profile update"
}
