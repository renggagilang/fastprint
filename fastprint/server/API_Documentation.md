# fastprint

App is an application to manage your product. This app has :

- RESTful endpoint for asset's CRUD operation
- JSON formatted response

&nbsp;

## RESTful endpoints

### GET /produks

> Get all produk

_Request Header_

```
not needed
```

_Request Body_

```
not needed
```

_Response (200)_

```
[

   {
        "id": 1,
        "id_produk": 6,
        "nama_produk": "ALCOHOL GEL POLISH CLEANSER GP-CLN01",
        "harga": 12500,
        "kategori_id": 1,
        "status_id": 1,
        "createdAt": "2023-12-08T12:59:47.597Z",
        "updatedAt": "2023-12-08T12:59:47.597Z",
        "Kategori": {
            "id": 1,
            "nama_kategori": "L QUEENLY"
        },
        "Status": {
            "id": 1,
            "nama_status": "bisa dijual"
        }
    },

]
```

---

### GET /produks/:id

> Find produk by Id

\__Request Header_

```
not needed
```

_Request Body_

```
not needed
```

_Request Params_

```
{
    id: <id>
}
```

_Response (200)_

```
{
    "id": 1,
    "id_produk": 6,
    "nama_produk": "ALCOHOL GEL POLISH CLEANSER GP-CLN01",
    "harga": 12500,
    "kategori_id": 1,
    "status_id": 1,
    "createdAt": "2023-12-08T12:59:47.597Z",
    "updatedAt": "2023-12-08T12:59:47.597Z"
}
```

### POST /produks

> Create new produk

\__Request Header_

```
not needed
```

_Request Body_

```
{
    "id": <produk_id>,
    "nama_produk": <nama_produk>,
    "harga": <harga>,
    "kategori_id": <kategori_id>,
    "status_id": <status_is>,

}
```

_Response (201 - created)_

```
{
    "id": 56,
    "nama_produk": "testes",
    "harga": 100,
    "kategori_id": 1,
    "status_id": 1,
    "updatedAt": "2023-12-07T12:40:53.496Z",
    "createdAt": "2023-12-07T12:40:53.496Z",
    "id_produk": null
}
```

_Response (400 - Data not found)_

```
{
  "message": "Data not found"
}
```

### DELETE/produks/:id

> Delete produk by Id

\__Request Header_

```
not needed
```

_Request Body_

```
not needed
```

_Request Params_

```
{
    id: <id>
}
```

_Response (200)_

```
{ message: `Produk with id:${id} deleted` }
```

_Response (400 - Data not found)_

```
{
  "message": "Data not found"
}
```

### PUT/produks/:id

> Update produk by Id

\__Request Header_

```
not needed
```

_Request Body_

```
{
    "id": <produk_id>,
    "nama_produk": <nama_produk>,
    "harga": <harga>,
    "kategori_id": <kategori_id>,
    "status_id": <status_is>,

}
```

_Request Params_

```
{
    id: <id>
}
```

_Response (200)_

```
{ message: `Produk  with id: ${id} updated` }
```

_Response (404 - Data not found)_

```
{
  "message": "NotFound"
}
```
