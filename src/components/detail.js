import React from "react";
import { Link } from 'react-router-dom'
export default class pageone extends React.Component  {
    render(){
        return (
            <div class="container-fluid" style="margin-top: 50px; padding-left: 100px;padding-right: 100px;">
                <div class="col-md-8 order-md-1">
                    <div class="row">
                        <div class="col-md-3 mb-3">
                            <label for="lastName">姓</label>
                            <input type="text" class="form-control" name="last_name" placeholder="姓" value="苗字" readonly />
                        </div>
                        <div class="col-md-3 mb-3">
                            <label for="firstName">名</label>
                            <input type="text" class="form-control" name="first_name" placeholder="名" value="名前" readonly />
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-3 mb-3">
                            <label for="lastKana">姓かな</label>
                            <input type="text" class="form-control" name="last_kana" placeholder="姓かな" value="みょうじ" readonly />
                        </div>
                        <div class="col-md-3 mb-3">
                            <label for="firstKana">名かな</label>
                            <input type="text" class="form-control" name="first_kana" placeholder="名かな" value="なまえ" readonly />
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-3 mb-3">
                            <label for="gender">性別</label>
                            <input type="text" class="form-control" name="gender" value="男" readonly />
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-2 mb-3">
                            <label for="postCode">郵便番号</label>
                            <input type="text" class="form-control" name="post_code" placeholder="郵便番号" value="123-4567" readonly />
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-5 mb-3">
                            <label for="address">住所</label>
                            <input type="text" class="form-control" name="address" placeholder="東京都渋谷区道玄坂2丁目11-1" value="青森県青森市長島一丁目1-1" readonly />
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-5 mb-3">
                            <label for="building">建物名</label>
                            <input type="text" class="form-control" name="building" placeholder="Ｇスクエア渋谷道玄坂 4F" value="" readonly />
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-3 mb-3">
                            <label for="email">メールアドレス</label>
                            <input type="email" class="form-control" name="email" placeholder="you@example.com" value="bobtabo.buhibuhi@gmail.com" readonly />
                        </div>
                    </div>
                </div>
                <hr class="mb-4" />
                <div class="form-group">
                    <a  class="btn btn-secondary" href="index.html" style="width:150px">戻る</a>
                    <button id="complete" type="button" class="btn btn-danger" style="width:150px"><i class="fas fa-database pr-1"></i> 削除</button>
                </div>
            </div>
        );
    }
}