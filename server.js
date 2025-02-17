const express = require('express');
const app = express();
const PORT = 3000;


app.get('/Signup', (req, res) => {
    const { UserName, Password, email } = req.query;
    

    if (UserName) {
        for (let i = 0; i < UserName.length; i++) {
            if (!((UserName[i] >= 'a' && UserName[i] <= 'z') || (UserName[i] >= 'A' && UserName[i] <= 'Z'))) {
                return res.send("Username Cannot be Empty");
            }
        }
    }

    if (email) {
        if (!email.includes('@') || !email.includes('.') || email.indexOf('@') > email.lastIndexOf('.')) {
            return res.send("Email cannot be empty");
        }
    }

    if (Password) {
        if (Password.length < 8 || Password.length > 16 ) {
            return res.send("Password length should be Greater than 8 or Lesser than 16");
        }
    }

    res.send("Signup Successfully");
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

