<?php

namespace App\Http\Controllers;

use App\Item;
use Illuminate\Http\Request;
use App\Notification;
use Illuminate\Support\Facades\Redis ;


class RequestController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api');
        $this->middleware('verified');
    }

    public function make_request(Request $request,$item_id){

        $user = auth()->user();
        $item = Item::where('id',$item_id)->first();
        $NotifierName = $user->username;
        $ItemName = $item->name ;
        $notifier_id = $user->id;
        $notified_id = $item->owner->id;

        $notification = new Notification();
        $notification->notifier_id=$notifier_id;
        $notification->notified_id=$notified_id;
        $notification->item_id=$item->id;
        $notification->ItemName=$ItemName;
        $notification->NotifierName=$NotifierName;
        $notification->save();
        $redis = Redis::connection();
        $redis->publish('message',json_encode(['notified_id'=>$notification->notified_id ,'NotifierName' =>$notification->NotifierName ,'ItemName'=>$notification->ItemName]));


        return response()->json("Item Requested Successfully",200);



    }
}
