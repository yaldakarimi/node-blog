const express = require("express");

// db connection string
const dbConnectionString = "mongodb+srv://<username>:<password>@nodeapp.wa6af7q.mongodb.net/?retryWrites=true&w=majority"
const app = express();
app.set("view engine", "ejs");
// if view files aren't in the folder called views:
// app.set("views", "my views")

app.listen(3000);
app.use("/assets",express.static('assets'))

app.get("/", (req, res) => {
	// Without ejs templated
	// res.sendFile("./views/index.html", { root: __dirname });
	// With ejs templates
	const posts = [
		{
			title: "Post one",
			summary: "This is the first post",
			content:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque voluptas blanditiis similique laborum harum dolorum, architecto asperiores ullam rerum non odit autem minus natus perferendis explicabo consequatur aliquid nobis quasi!",
		},

		{
			title: "Post two",
			summary: "This is the second post",
			content:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque voluptas blanditiis similique laborum harum dolorum, architecto asperiores ullam rerum non odit autem minus natus perferendis explicabo consequatur aliquid nobis quasi!",
		},

		{
			title: "Post three",
			summary: "This is the third post",
			content:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque voluptas blanditiis similique laborum harum dolorum, architecto asperiores ullam rerum non odit autem minus natus perferendis explicabo consequatur aliquid nobis quasi!",
		},
	];
	res.render("index", { title: "Home", posts });
});

app.get("/about", (req, res) => {
	res.render("about", { title: "About" });
});

app.get("/posts/create", (req, res) => {
	res.render("create", { title: "Create a post" });
});

// redirects
// app.get("/about-me", (req, res) => {
// 	res.redirect("/about");
// });

// 404
app.use((req, res) => {
	res.status(404).render("404", { title: "404" });
});
