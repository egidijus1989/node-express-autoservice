{
	"info": {
		"_postman_id": "084030b4-86d3-405f-9f5a-d4d025351656",
		"name": "meistru vertinimo aplikacija",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
		"_exporter_id": "32484791"
	},
	"item": [
		{
			"name": "user signup",
			"request": {
				"method": "POST",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\n    \"name\": \"Grafas\",\n    \"email\": \"grafas@gmail.com\",\n    \"password\": \"grafas123\",\n    \"passwordConfirm\": \"grafas123\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:8888/api/v1/auth/signup",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "8888",
					"path": [
						"api",
						"v1",
						"auth",
						"signup"
					]
				}
			},
			"response": []
		},
		{
			"name": "user login",
			"request": {
				"auth": {
					"type": "noauth"
				},
				"method": "POST",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\n    \"email\": \"toras1@gmail.com\",\n    \"password\": \"toras123\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:8888/api/v1/auth/login",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "8888",
					"path": [
						"api",
						"v1",
						"auth",
						"login"
					]
				}
			},
			"response": []
		},
		{
			"name": "user logout",
			"request": {
				"auth": {
					"type": "bearer",
					"bearer": [
						{
							"key": "token",
							"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZTZjZmU3Y2M2MTU4NGZhZjQyZDA5MyIsImlhdCI6MTcwOTYyNjc5NSwiZXhwIjoxNzA5NjI3Njk1fQ.8yAmmaz53N9xNSLTy5d54Pkh_rTE_bAzVNnc9SwF6aA",
							"type": "string"
						}
					]
				},
				"method": "GET",
				"header": [],
				"url": {
					"raw": "http://localhost:8888/api/v1/auth/logout",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "8888",
					"path": [
						"api",
						"v1",
						"auth",
						"logout"
					]
				}
			},
			"response": []
		},
		{
			"name": "create autoServise",
			"request": {
				"auth": {
					"type": "bearer",
					"bearer": [
						{
							"key": "token",
							"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZTZjZmU3Y2M2MTU4NGZhZjQyZDA5MyIsImlhdCI6MTcwOTYzMzc3NiwiZXhwIjoxNzEyMjI1Nzc2fQ.aW5oL93Ci7FxkHgpJPIGV7b4J5k8HxLJdVctcO-gbY0",
							"type": "string"
						}
					]
				},
				"method": "POST",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\n    \"name\": \"Baltijos broliai\",\n    \"address\": \"baltijos pr 250, Kaunas\",\n    \"bossman\": \"Jonas Jonaitis\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:8888/api/v1/service/",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "8888",
					"path": [
						"api",
						"v1",
						"service",
						""
					]
				}
			},
			"response": []
		},
		{
			"name": "update autoServise",
			"request": {
				"auth": {
					"type": "bearer",
					"bearer": [
						{
							"key": "token",
							"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZTZjZmU3Y2M2MTU4NGZhZjQyZDA5MyIsImlhdCI6MTcwOTYzMzc3NiwiZXhwIjoxNzEyMjI1Nzc2fQ.aW5oL93Ci7FxkHgpJPIGV7b4J5k8HxLJdVctcO-gbY0",
							"type": "string"
						}
					]
				},
				"method": "PATCH",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\n    \"name\": \"Dainavos remonto centras\",\n    \"address\": \"partixzany 350, Kaunas\",\n    \"bossman\": \"Petras Petraitis\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:8888/api/v1/service/65e6f104310e3f8e92a706cc",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "8888",
					"path": [
						"api",
						"v1",
						"service",
						"65e6f104310e3f8e92a706cc"
					]
				}
			},
			"response": []
		},
		{
			"name": "delete autoService",
			"request": {
				"auth": {
					"type": "bearer",
					"bearer": [
						{
							"key": "token",
							"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZTZjZmU3Y2M2MTU4NGZhZjQyZDA5MyIsImlhdCI6MTcwOTYzMzc3NiwiZXhwIjoxNzEyMjI1Nzc2fQ.aW5oL93Ci7FxkHgpJPIGV7b4J5k8HxLJdVctcO-gbY0",
							"type": "string"
						}
					]
				},
				"method": "DELETE",
				"header": [],
				"url": {
					"raw": "http://localhost:8888/api/v1/service/65e6f104310e3f8e92a706cc",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "8888",
					"path": [
						"api",
						"v1",
						"service",
						"65e6f104310e3f8e92a706cc"
					]
				}
			},
			"response": []
		},
		{
			"name": "get all autoServices",
			"request": {
				"auth": {
					"type": "bearer",
					"bearer": [
						{
							"key": "token",
							"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZTZjZmU3Y2M2MTU4NGZhZjQyZDA5MyIsImlhdCI6MTcwOTYzMzc3NiwiZXhwIjoxNzEyMjI1Nzc2fQ.aW5oL93Ci7FxkHgpJPIGV7b4J5k8HxLJdVctcO-gbY0",
							"type": "string"
						}
					]
				},
				"method": "GET",
				"header": [],
				"url": {
					"raw": "http://localhost:8888/api/v1/service",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "8888",
					"path": [
						"api",
						"v1",
						"service"
					]
				}
			},
			"response": []
		},
		{
			"name": "create autoWorker",
			"request": {
				"auth": {
					"type": "bearer",
					"bearer": [
						{
							"key": "token",
							"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZTZjZmU3Y2M2MTU4NGZhZjQyZDA5MyIsImlhdCI6MTcwOTYzMzc3NiwiZXhwIjoxNzEyMjI1Nzc2fQ.aW5oL93Ci7FxkHgpJPIGV7b4J5k8HxLJdVctcO-gbY0",
							"type": "string"
						}
					]
				},
				"method": "POST",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\n    \"name\": \"Oompa\",\n    \"lastname\": \"loompa\",\n    \"speciality\": \"engine expert\",\n    \"photo\": \"mnrfgbnfgbknfgkblnf;\",\n    \"city\": \"Kaunas\",\n    \"autoService\": \"65e6ef8e31296c21c306988d\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:8888/api/v1/worker",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "8888",
					"path": [
						"api",
						"v1",
						"worker"
					]
				}
			},
			"response": []
		},
		{
			"name": "update auto worker",
			"request": {
				"auth": {
					"type": "bearer",
					"bearer": [
						{
							"key": "token",
							"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZTZjZmU3Y2M2MTU4NGZhZjQyZDA5MyIsImlhdCI6MTcwOTYzMzc3NiwiZXhwIjoxNzEyMjI1Nzc2fQ.aW5oL93Ci7FxkHgpJPIGV7b4J5k8HxLJdVctcO-gbY0",
							"type": "string"
						}
					]
				},
				"method": "PATCH",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\n                \"autoService\": [\"65e6ffb54df110a41d0f7094\", \"65e6ff9d4df110a41d0f7091\"]\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:8888/api/v1/worker/65e707e63793135460ec1975",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "8888",
					"path": [
						"api",
						"v1",
						"worker",
						"65e707e63793135460ec1975"
					]
				}
			},
			"response": []
		},
		{
			"name": "delete auto worker",
			"request": {
				"auth": {
					"type": "bearer",
					"bearer": [
						{
							"key": "token",
							"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZTZjZmU3Y2M2MTU4NGZhZjQyZDA5MyIsImlhdCI6MTcwOTYzMzc3NiwiZXhwIjoxNzEyMjI1Nzc2fQ.aW5oL93Ci7FxkHgpJPIGV7b4J5k8HxLJdVctcO-gbY0",
							"type": "string"
						}
					]
				},
				"method": "DELETE",
				"header": [],
				"url": {
					"raw": "http://localhost:8888/api/v1/worker/65e6f9b42039441ea93cd7aa",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "8888",
					"path": [
						"api",
						"v1",
						"worker",
						"65e6f9b42039441ea93cd7aa"
					]
				}
			},
			"response": []
		},
		{
			"name": "get all autoworkers",
			"request": {
				"auth": {
					"type": "bearer",
					"bearer": [
						{
							"key": "token",
							"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZTZjZmU3Y2M2MTU4NGZhZjQyZDA5MyIsImlhdCI6MTcwOTYzMzc3NiwiZXhwIjoxNzEyMjI1Nzc2fQ.aW5oL93Ci7FxkHgpJPIGV7b4J5k8HxLJdVctcO-gbY0",
							"type": "string"
						}
					]
				},
				"method": "GET",
				"header": [],
				"url": {
					"raw": "http://localhost:8888/api/v1/worker?fields=name,lastname",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "8888",
					"path": [
						"api",
						"v1",
						"worker"
					],
					"query": [
						{
							"key": "limit",
							"value": "2",
							"disabled": true
						},
						{
							"key": "page",
							"value": "2",
							"disabled": true
						},
						{
							"key": "sort",
							"value": "lastname",
							"disabled": true
						},
						{
							"key": "fields",
							"value": "name,lastname"
						}
					]
				}
			},
			"response": []
		},
		{
			"name": "like auto worker",
			"request": {
				"auth": {
					"type": "bearer",
					"bearer": [
						{
							"key": "token",
							"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZTZmMGEzMzEwZTNmOGU5MmE3MDZjNiIsImlhdCI6MTcwOTYzOTQyOSwiZXhwIjoxNzEyMjMxNDI5fQ.wdDIdEaMqa3sZzLuNwF2h51nUCxHXtXkDhRnnQKk5kU",
							"type": "string"
						}
					]
				},
				"method": "PATCH",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\n    \"wouldRecomend\": true\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:8888/api/v1/worker/65e6f92b2039441ea93cd7a7/like",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "8888",
					"path": [
						"api",
						"v1",
						"worker",
						"65e6f92b2039441ea93cd7a7",
						"like"
					]
				}
			},
			"response": []
		}
	]
}