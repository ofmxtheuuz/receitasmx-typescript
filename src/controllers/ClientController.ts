import express, { Request, Response, NextFunction } from "express"
import SReceita from "../model/SReceita"

export async function Index(req: Request, res: Response) {

    res.render("client/index", { receitas: await SReceita.find().lean(), title: "Home" })
}

export async function AddReceita(req: Request, res: Response) {
    res.render("client/add", { title: "Adicionar receita" })
}

export async function AddReceitaService(req: Request, res: Response) {
    new SReceita({
        titulo: req.body.titulo,
        descricao: req.body.descricao,
        conteudo: req.body.conteudo,
        autor: req.body.autor
    }).save().then(() => {
        res.redirect("/")
    })
}

export async function DeleteReceita(req: Request, res: Response) {
    SReceita.findByIdAndDelete(req.body.id).then(() => {
        res.redirect("/")
    })
}

export async function EditReceita(req: Request, res: Response) {
    let receita: any = await SReceita.findById(req.params.id).lean()
    console.log(receita)
    res.render("client/edit", { receita: receita, title: `Editar ${receita._id}` })
}

export async function EditReceitaService(req: Request, res: Response) {
    await SReceita.findByIdAndUpdate(req.body.id,
        {
            titulo: req.body.titulo,
            descricao: req.body.descricao,
            autor: req.body.autor,
            conteudo: req.body.conteudo
        }
    )
    res.redirect("/")
}

export async function ViewReceita(req: Request, res: Response) {
    let receita: any = await SReceita.findById(req.params.id).lean()

    res.render("client/receita", { title: "Visualizar receita", receita: receita })
}