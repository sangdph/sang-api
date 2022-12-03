import userRouter from './user.js';
import studentRouter from './student.js';

const routes = (app) => {
    app.use("/user", userRouter);

    app.use("/student", studentRouter);
    
    app.use("/", (req, res) => {
        res.render("home", {
            isShow: true,
            helpers: {
                message() {
                    return "Lap trinh that de";
                },
                noti() {
                    return "error";
                },
            },
        });
    });

    
};

export default routes;