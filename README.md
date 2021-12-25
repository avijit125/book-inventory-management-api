**STUDENT MANAGMENT API**


## API Reference

#### TO LOGIN

```http
  POST /auth/login
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `email` `password` | `string` | this method helps you to login |

#### TO SIGNUP

```http
  PUT /auth/signup
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `nothing`      | `string` | this method helps you to signup |

```http
  GET /class
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `role` `token`     | `string` | this method helps you get class details |


```http
  POST /class
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `role` `token`     | `string` | this method helps you create class (only for instructor) |

```http
  PUT /class
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `role` `token`     | `string` | this method helps you update class (only for instructor) |

```http
  DELETE /class
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `role` `token`     | `string` | this method helps you delete class (only for instructor) |

  