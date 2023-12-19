# Retailsysx

The system's preview is live at [Retailsysx.com](https://mukuha.pythonanywhere.com/)

# Project Overview

This project is a web application built using Flask, a Python web framework.  
The application focuses on an online retail system with features like user authentication, product management, shopping cart functionality, and order processing.  
It uses SQLAlchemy for database management, Flask-Mail for email functionality, and Flask-Login for user authentication.  

# Getting Started
To run the project locally, follow these steps:  
1. Clone the repository to your local machine  
```dockerignore
git clone https://github.com/Levi-LMN/Retailsysx.git

```

2. Create a virtual environment and activate it  
    a. Navigate to the root folder 
```dockerignore
cd Retailsysx
```
b. Create a virtual environment  
```dockerignore
python -m venv venv
```
c. Activate the virtual environment   
if you are using windows, run the following command in the terminal
```dockerignore
venv\Scripts\activate
```
if you are using linux, run the following command in the terminal
```dockerignore
source venv/bin/activate
```




3. Install the dependencies  

You'll need the following modules installed in your pc 
```
pip install python-dotenv
pip install Flask
pip install Flask-SQLAlchemy
pip install Flask-Mail
pip install Flask-Login
pip install Flask-Migrate
pip install Flask-Bcrypt


```

to install the dependencies,  navigate to the root folder and
run the following command in the terminal
```
python install_dependencies.py
```

4. Create a .env file in the root folder and add the following environment variables  
```dockerignore
SECRET_KEY=your_secret_key
MAIL_SERVER=your_mail_server
MAIL_PORT=your_mail_port
MAIL_USE_TLS=True  # or False
MAIL_USE_SSL=True  # or False
MAIL_USERNAME=your_mail_username
MAIL_PASSWORD=your_mail_password
DATABASE_URI=your_database_uri
```

5. Initialize the database  
```dockerignore
python app.py db init
python app.py db migrate
python app.py db upgrade
```

6. Run the application  
```dockerignore
python app.py 
```
7. Open your browser and navigate to http://localhost:5000/


# Project Structure
```dockerignore
Retailsysx/
│
├── app/
│   ├── __init__.py
│   ├── models.py
│   ├── routes/
│   │   ├── __init__.py
│   │   ├── admin_routes.py
│   │   ├── user_routes.py
│   │   ├── email_routes.py
│   │   ├── product_routes.py
│   │   ├── order_routes.py
│   │   └── auth_routes.py
│   └── templates/
│       ├── admin/
│       │   ├── templates/
│       │   │   ├── index.html
│       │   │   ├── manage_products.html
│       │   │   ├── view_emails.html
│       │   │   ├── admin_order.html
│       │   │   └── user.html
│       │   ├── login.html
│       │   └── index.html
│       └── user/
│           ├── templates/
│           │   ├── index.html
│           │   ├── login.html
│           │   ├── products.html
│           │   ├── cart.html
│           │   ├── about.html
│           │   ├── contact.html
│           │   ├── order_details_form.html
│           │   ├── order.html
│           │   └── pay.html
│           └── login_alert.html
│
├── migrations/
│   ├── alembic.ini
│   ├── env.py
│   ├── README
│   ├── script.py.mako
│   └── versions/
│
├── static/
│   ├── css/
│   │   ├── styles.css
│   │   ├── bootstrap.css
│   │   ├── cart.css
│   │   ├── pay.css
│   │   ├── product.css
│   │   ├── responsive.css
│   │   └── font-awesome.css
|   ├── js/
│   │   ├── custom.js
│   │   └── cart.js
│   └── images/
│
├── .env
├── app.py
├── install_dependencies.py
└── README.md
```

# Features
## User Authentication
The application uses Flask-Login to manage user authentication.  
Users can register, login, and logout.  
The application also uses Flask-Mail to send users a welcome email after they register.  

## Product Management
The application allows users with admin privileges to add, edit, and delete products.  
The application also allows users to view all products.  

## Shopping Cart
The application allows users to add products to their shopping cart.  
The application also allows users to view their shopping cart and remove products from it.  

## Order Processing
The application allows users to place orders.  
The application also allows users to view their orders.  
The application uses Flask-Mail to send users an email after they place an order.  
The application uses Stripe to process payments.

## Security
The application uses the following security measures:  
* Passwords are hashed using the Werkzeug security module 
* User sessions are protected using the Flask-Login module  


# Routes
## Admin Routes
```dockerignore
/admin
/admin/login    
/admin/logout
/admin/manage_products
/admin/add_product
/admin/edit_product/<int:product_id>
/admin/delete_product/<int:product_id>
/admin/view_emails
/admin/view_orders
/admin/view_order/<int:order_id>
/admin/view_order/<int:order_id>/update
```

## User Routes
```dockerignore
/
/login
/logout
/products
/cart
/about
/contact
/order_details_form
/order
/pay
```


# Built With
* [Flask](https://flask.palletsprojects.com/en/1.1.x/) - The web framework used  
* [SQLAlchemy](https://www.sqlalchemy.org/) - The database toolkit used  
* [Flask-Mail](https://pythonhosted.org/Flask-Mail/) - The email framework used  
* [Flask-Login](https://flask-login.readthedocs.io/en/latest/) - The user authentication framework used  
* [Flask-Migrate](https://flask-migrate.readthedocs.io/en/latest/) - The database migration framework used  
* [Bootstrap](https://getbootstrap.com/) - The CSS framework used  
* [Stripe](https://stripe.com/) - The payment processing platform used  

# Author
* **Levi Mukuha** - [Levi-LMN]

# License
This project is licensed under the GNU License - see the [LICENSE.md](License.md) file for details






