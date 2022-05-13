const express = require("express");
const router = express.Router();
const multer = require("multer");
const res = require("express/lib/response");
const { Usuario, Produto, Categoria } = require("../models");
const { Router } = require("express");

//--- Multer IMAGEM --- //

const uploads = multer({
  dest: "public/uploads/",
});

//--- LOGIN --- //

function verificaLogin(req, res, next) {
  if (!req.session.estaLogado) {
    res.redirect("/login");
    return;
  }
  next();
}

router.use(verificaLogin);

router.get("/", function (req, res) {
  res.render("admin");
});

router.get("/produtos", async function (req, res) {
  const usuario = req.session.usuarioLogado.id;

  try {
    const obj = {
      produto: await Produto.findAll(),
      usuario: await Usuario.findByPk(usuario),
    };
    res.render("produtos/admin-produtos", obj);
  } catch (error) {
    res.render("produtos/admin-produtos");
  }
});

router.get("/produtos/criar", async function (req, res) {
  const usuario = req.session.usuarioLogado.id;
  const obj = {
    categorias: await Categoria.findAll(),
    usuario: await Usuario.findByPk(usuario),
  };
  res.render("produtos/form-produtos", obj);
});

router.post(
  "/produtos/criar",
  uploads.single("imagemServico"),
  async function (req, res) {
    req.body.imagem = req?.file?.filename;

    await Produto.create(req.body);

    res.redirect("/admin/produtos");
  }
);

router.get("/produtos/:idProduto/remover", async function (req, res) {
  const idProduto = req.params.idProduto;
  await Produto.destroy({
    where: {
      id: idProduto,
    },
  });
  res.redirect("/admin/produtos");
});

router.get("/produtos/:idProduto/editar", async function (req, res) {
  const idProduto = req.params.idProduto;
  const usuario = req.session.usuarioLogado.id;
  const produto = await Produto.findByPk(idProduto, {
    include: {
      model: Categoria,
      as: "categoria",
    },
  });

  const obj = {
    produto: produto,
    usuario: await Usuario.findByPk(usuario),
  };
  res.render("produtos/editar-produto", obj);
});

router.post("/produtos/:idProduto/editar", async function (req, res) {
  const idProduto = req.params.idProduto;

  await Produto.update(req.body, {
    where: {
      id: idProduto,
    },
  });
  res.redirect("/admin/produtos");
});

router.get("/categorias", async function (req, res) {
  const obj = {
    categorias: await Categoria.findAll(),
  };
  res.render("categoria/admin-categorias", obj);
});

router.get("/categorias/criar", function (req, res) {
  res.render("categoria/form-categorias");
});

router.post("/categorias/criar", async function (req, res) {
  await Categoria.create(req.body);

  res.redirect("/admin/categorias");
});

module.exports = router;
