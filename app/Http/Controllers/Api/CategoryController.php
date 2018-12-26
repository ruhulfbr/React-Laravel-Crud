<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Category;

class CategoryController extends Controller
{
    public function Index(){
        $result = Category::all();
        return $result;
    }
    public function SaveCategory(Request $request ){
        $category = new Category();
        $category->category_name = $request->category_name;
        $category->save();

        return 'success';
    }
    public function DeleteCategory($id){
        $category = Category::find($id);
        $category->delete();
    }
    public function EditCategory($id){
        $category = Category::find($id);
        return $category;
    }
    public function UpdateCategory(Request $request, $id){
        $category = Category::find($id);
        $category->category_name = $request->category_name;
        $category->save();
    }
}
