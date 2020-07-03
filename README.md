## Shell (Mac, Linux):

$`curl -fsSL https://deno.land/x/install/install.sh | sh`

## PowerShell (Windows):

$`iwr https://deno.land/x/install/install.ps1 -useb | iex`

เปิด PowerShell (Windows)

$`deno --version`

*deno 1.1.2

v8 8.5.216

typescript 3.9.2*


## Start Project

$`deno run --allow-net server.ts`

*http://localhost:5000/api/products*


ก่อนรันแต่ละ workshop ให้ stop run deno ก่อนแล้วรันใหม่ น่ะ ^^

### workshop1 
@get => localhost:5000/api/products

### workshop2
@get => localhost:5000/api/products/{:id} => localhost:5000/api/products/2

### workshop3
@post => localhost:5000/api/products
body => {
    "name": "test",
    "price": 156.15
}

### workshop4
@put => localhost:5000/api/products/{:id} => localhost:5000/api/products/1
body => {
    "name": "test",
    "price": 156.15
}

### workshop5
@delete => localhost:5000/api/products/{:id} => localhost:5000/api/products/1
