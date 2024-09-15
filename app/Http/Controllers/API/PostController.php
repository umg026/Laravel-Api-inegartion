<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data['post'] = Post::all();

        return response()->json([
            'status' => true,
            'message' => 'Data fetch sucess',
            'data' => $data
        ], 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $storePost = Validator::make(
            $request->all(),
            [
                'title' => 'required',
                'description' => 'required',
                'image' => 'required|mimes:png,jpg,jpeg,gif',
            ]
        );

        if ($storePost->fails()) {
            return response()->json([
                'status' => false,
                'message' => 'Fail to send data',
                'errors' => $storePost->errors()->all()
            ], 401);
        } else {
            // Upload image using api
            $img = $request->file('image');
            $text = $img->getClientOriginalExtension();
            $imageName = time() . '.' . $text;
            $img->move(public_path() . '/uploads', $imageName);


            $post = Post::create([
                'title' => $request->title,
                'description' => $request->description,
                'image' => $imageName,
            ]);
            // if sucess to store data in db then show this status
            return response()->json([
                'status' => true,
                'message' => 'Post created successfully',
                'user' => $post,
            ], 200);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $data['post'] = Post::select(
            'id',
            'title',
            'description',
            'image'
        )->where(['id' => $id])->first();


        return response()->json([
            'status' => true,
            'message' => 'Data fetch sucess',
            'data' => $data
        ], 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        // Validate the request
        $storePost = Validator::make(
            $request->all(),
            [
                'title' => 'required',
                'description' => 'required',
                'image' => 'nullable|mimes:png,jpg,jpeg,gif',
            ]
        );

        if ($storePost->fails()) {
            return response()->json([
                'status' => false,
                'message' => 'Fail to send data',
                'errors' => $storePost->errors()->all()
            ], 401);
        }

        // Fetch the post by id
        $post = Post::find($id);

        if (!$post) {
            return response()->json([
                'status' => false,
                'message' => 'Post not found',
            ], 404);
        }

        // Handle the image upload (if provided)
        if ($request->hasFile('image')) {
            $path = public_path('/uploads/');

            // Check if the post has an existing image and delete it
            if ($post->image && file_exists($path . $post->image)) {
                unlink($path . $post->image);
            }

            // Upload the new image
            $img = $request->file('image');
            $imageName = time() . '.' . $img->getClientOriginalExtension();
            $img->move($path, $imageName);
        } else {
            // If no new image is uploaded, keep the old image
            $imageName = $post->image;
        }

        // Update the post in the database
        $post->update([
            'title' => $request->title,
            'description' => $request->description,
            'image' => $imageName,
        ]);

        // Return success response with updated post
        return response()->json([
            'status' => true,
            'message' => 'Post updated successfully',
            'post' => $post,  // Return the updated post
        ], 200);
    }


    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $post = Post::find($id);
        // remove image frist 
        $imagePath = public_path('uploads/' . $post->image);

        if (file_exists($imagePath)) {
            unlink($imagePath);  // Delete the image file
        } else {
            // If the file does not exist, you can log or return a message, but continue to delete the post
            \Log::warning("Image file not found: " . $imagePath);
        }


        $post->delete();


        return response()->json([
            'status' => true,
            'message' => 'Post delete successfully',
            'delete_Data' => $post,
        ], 200);
    }
}
