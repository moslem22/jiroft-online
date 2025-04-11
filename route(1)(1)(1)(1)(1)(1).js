import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function DELETE() {
      let uploadPath = path.join(__dirname, "../public/", req.body.shopImage);
      prisma.shop
        .delete({
          where: {
            id: req.body.delete,
          },
        })
        .then(() => {
          fs.unlink(uploadPath, (err) => {
            if (err) throw err
          })
          prisma.customer.findMany().then((customer) => {
          prisma.category.findMany({
            include: {
              shop: {
                include: { 
                  product: true,
                }
              }
            }
          }).then((category) => {
              prisma.user.findMany().then((user) => { 
                res.render("admin-dashboard.ejs", {
                  title: "میز کار مدیر",
                  category: category,
                  customer: customer,
                  user: user,
                  path: "/admin",
                });
              })
            });
          });
        })
        .catch((err) => {
          console.log(err);
        });
}