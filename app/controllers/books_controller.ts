import { HttpContext } from '@adonisjs/core/http'
import book from '#models/book' 
import { stores } from '@adonisjs/session';
import { messages } from '@vinejs/vine/defaults';
export default class BooksController {
    public async index({ request, response } : HttpContext) {
        const books = await book.all()
        return response.ok(books);
    }

    public async store({ request, response }: HttpContext) {
        const data = request.only(['title', 'author', 'published_date']);
        const books = await book.create(data)
        return response.created(books); 
    }

    public async show({ params, response }: HttpContext) {
        const books = await book.find(params.id)
        if(!books) {
            return response.notFound({message: 'Buku gaada co'})
        }
        return response.ok(books);
    }
    
    public async update({ params, request, response }: HttpContext) {
        const books = await book.find(params.id)
        if(!books) {
            return response.notFound({message: 'Buku gaada co'})
        }
        const data = (request.only(['title','author']));
        books.merge(data);
        await books.save();
        return response.ok(books);
    }

    public async destroy({ params, response }: HttpContext) {
        const books = await book.find(params.id)
        if(!books) {
            return response.notFound({message: 'Buku gaada co'})
        }
        await books.delete();
        return response.noContent();
    }
}