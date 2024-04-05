import CustomRouter from "../CustomRouter.js";
import ordersRouter from "./orders.view.js";
import passCallBackMid from "../../middlewares/passCallBack.mid.js";
import products from "../../data/mongo/products.mongo.js";
import productsRouter from "./products.view.js";
import sessionsRouter from "./sessions.view.js";

class ViewsRouter extends CustomRouter {
  init() {
    this.use("/products", productsRouter);
    this.use("/orders", ordersRouter);
    this.use("/sessions", sessionsRouter);
    this.use("/options", async (req,res, next) => {
      try {
        return res.render("options")
      } catch (error) {
        return next(error)
      }
    })
    this.read("/", ["PUBLIC"], passCallBackMid("jwt"), async (req, res, next) => {
      try {
        // const options = {
        //   limit: req.query.limit || 4,
        //   page: req.query.page || 1,
        //   sort: { title: 1 },
        //   lean: true,
        // };
        // const filter = {};
        // if (req.query.title) {
        //   filter.title = new RegExp(req.query.title.trim(), "i");
        // }
        // if (req.query.sort === "desc") {
        //   options.sort.title = "desc";
        // }
        // const all = await products.read({ filter, options });
        return res.render("login", {
          // products: all.docs,
          // next: all.nextPage,
          // prev: all.prevPage,
          title: "INDEX",
          // filter: req.query.title,
        });
      } catch (error) {
        return next(error);
      }
    });
  }
}

const viewsRouter = new ViewsRouter();
export default viewsRouter.getRouter();