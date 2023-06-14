import { NewPost } from "./newPost";
import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import { newPostConfig } from "./newPost.config";

test('should have Author name input', ()=> {
    render(<BrowserRouter><NewPost/></BrowserRouter>)
    const authorInput = screen.getAllByPlaceholderText(newPostConfig.authorInput)
    expect(authorInput[0]).toBeInTheDocument()
})

test('should have Title input', ()=> {
    render(<BrowserRouter><NewPost/></BrowserRouter>)
    const titleInput = screen.getAllByPlaceholderText(newPostConfig.postTitleInput)
    expect(titleInput[0]).toBeInTheDocument()
})

test('should have Body input', ()=> {
    render(<BrowserRouter><NewPost/></BrowserRouter>)
    const bodyInput = screen.getAllByPlaceholderText(newPostConfig.postBodyInput)
    expect(bodyInput[0]).toBeInTheDocument()
})

test('should have Submit button', ()=> {
    render(<BrowserRouter><NewPost/></BrowserRouter>)
    const btn = screen.getByText(newPostConfig.submitBtnText)
    expect(btn).toBeInTheDocument()
})