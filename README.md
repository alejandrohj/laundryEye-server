# LaundryEye

<br>

## Description
LaundryEye is a web application to supervising, controling, manage automatic process and manage the maintenance of an industrial laundry


## User Stories

- **Home**: Visitor can see the both lines of linen ironing and foldering.
- **Carts Washer**: (auth) visitor can see and manage the cart washer of the plant.
- **Filter**: visitor can select a specific category of items.
- **Add to cart**: Visitor can choose item-quantity and add items to a cart.
- **Signup**: Visitor has to Sign Up/Log In to visit the cart. 
- **LogIn**: Visitor has to Sign Up/Log In to visit the cart. 
- **Cart**: User can edit cart, increase quantity, or delete items.
- **Delivery**: User can choose time and date for pick-up and delivery.
- **Pay**: User pays cart (Sprite).
- **Orderhistory**: User can see all past orders and order-status.
- **Log out**: User can log out.
- **Delete**: User can delete the profile.
- **Admin/New, edit and delete**: Admin-user who can make new laundry-items and edit and delete current items.
- **Admin/Delivery**: Admin-user who can see all orders and change their status.
- **Deliveryman**: delivery-man that can see orders and change status.
- **404**: User wants to see a nice 404-page.

## Backlog


<br>


# Client / Frontend

## React Router Routes (React App)
| Path                      | Component            | Permissions | Behavior                                                     |
| ------------------------- | -------------------- | ----------- | ------------------------------------------------------------ |
| `/`                       | Home           | public `<Route>`            | Home page                               |
| `/gmao`                   | GMAO     | public `<Route>`            | GMAO page                                        |
| `/sign-in`                   | Signin            | public `<Route>`            | Sign in page                                       |
| `/sign-up`                   | Signup             | public `<Route>`            | Sign up page                                        |



## Components


## Services

- Auth Service
  - auth.login(user)
  - auth.signup(user)
  - auth.logout()

- Backlog Service
  - backlog.add(id)
  - backlog.delete(id)
  - backlog.update(id)
  
<br>

# Server / Backend

## Models

User Model
```javascript
user = {
    userName: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    passwordHash: {
      type: String,
      required: true
    },
    userType: {
      type: String,
      enum: ['admin','operator']
    }
  },
  {
    timestamps: true
  }
```

warehouse Model
```javascript
warehouse = {
  name:{
    type: String,
    required: true,
    unique: true
  },
  floor:{
    type: String,
    required: true
  },
  stock: [{
    _id:false,
    itemId: {
      type: Schema.Types.ObjectId,
      ref: 'item'
    },
    quantity: Number
  }]
}
```

Item Model
```javascript
item = {
  name:{
    type: String,
    required: true,
    unique: true
  },
  branch: String,
  ref: String,
  category: {
    type: String,
    enum: ['repuesto','consumible']
  },
  subcategory:{
    type: String,
    enum: ['electrico','mecanico','correa','protección','filtro']
  },
  unit: {
    type: String,
    enum: ['metros','unidades','litros','kilos']
  },
  provider:{
    type: String
  },
  createBy: {
      type: Schema.Types.ObjectId,
      ref: 'user'
  },
  updatedBy: {
    type: Schema.Types.ObjectId,
    ref: 'user'
},
  commentary: String,
  price: Number
}
```

IronData Model
```javascript
ironData =  {
     statusResume: {
       operating: Number,
       waiting: Number,
       nonOperating: Number,
       emergency:Number,
       off: Number
     },
     iron: Number,
     productivityResume: {
       speedAverage: Number,
       temperatureAverage: Number,
       productionPost1Average: Number,
       productionPost2Average: Number,
       productionPost3Average: Number
     }
  },
  {
    timestamps: true
  }
```

CartWasherData Model
```javascript
cartWasherData = {
     status: {
       type: String,
       enum: ['operating','washing','drying','off']
     },
     orders: {
       type: String,
       enum: ['none','start','stop']
     },
     timeWashing: Number,
     timeDrying: Number,
     timeToWash: Number,
     timeToDry: Number,
     timeToWashRemoteModifiyed: Number,
     timeToDryRemoteModifiyed: Number
  },
  {
    timestamps: true
  }
```

<br>

## API Endpoints (backend routes)

| HTTP Method | URL                         | Request Body                 | Success status | Error Status | Description                                                  |
| ----------- | --------------------------- | ---------------------------- | -------------- | ------------ | ------------------------------------------------------------ |
| GET         | `/api/laundry`           | All laundryitems                | 200            | 404          | Gives all laundry items           |
| POST        | `/api/laundry/create`        | Create new laundryitem      | 201            | 404          | Checks if fields not empty (422)                            |
| PUT        | `/api/laundry/:id/edit`        | Edit laundryitem      | 201            | 404          | Checks if fields not empty (422)                            |
| DELETE        | `/api/laundry/:id/delete`        | Delete laundryitem      | 201            | 404          |                    |
| POST        | `/api/order`                | Posts order in db      | 201            | 404          | Checks if fields not empty (422)                            |
| GET        | `/api/orders`        | Get all orders      | 201            | 404          |                    |
| PUT        | `/api/order/:id/edit`        | Edit order      | 201            | 404          | Checks if fields not empty (422)                    |
| GET         | `/api/orders/availability`           | Gets availability   | 200            | 404          | Adjusts calendar with availability           |
| POST        | `/api/signin`        | {email, password}      | 201            | 404          | Checks if fields not empty (422)                            |
| POST        | `/api/signup`        | {username, email, password}      | 201            | 404          | Checks if fields not empty (422)                            |
| GET        | `/api/user`        | user      | 200            | 404          | Gets user                         |
| POST        | `/api/logout`        | Logout user      | 200            | 404          | Logout user                         |
| POST        | `/api/user/:id/edit`        | Edits user      | 201            | 404          | Checks if fields not empty (422)                            |
| POST        | `/api/admin/signup`        | {email, password}      | 201            | 404          | Checks if fields not empty (422)                            |

<br>


## Links

### Trello/Kanban

[Link to your trello board](https://trello.com/b/W14CF29f/plaundry) 

### Git

The url to your repository and to your deployed project

[Client repository Link](https://github.com/llanting/plaundry-client)

[Server repository Link](https://github.com/llanting/plaundry-server)

[Deployed App Link](https://dashboard.heroku.com/apps/plaundry)

### Slides

The url to your presentation slides

[Slides Link]()