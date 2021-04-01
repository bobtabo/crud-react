import React from "react";
import { Link } from 'react-router-dom'
export default class pageone extends React.Component  {
    constructor() {
        super();

        this.state = {
            datas: []
        };
    }

    componentDidMount() {
        axios
            .get('http://localhost/api/v1/customer')
            .then(response => {
                this.setState({datas: response.data});
            })
            .catch(() => {
                console.log('通信に失敗しました');
            });
    }

    render() {
        return this.state.datas.map(data => {
            return (
                <div class="container-fluid" style="padding-left: 50px;padding-right: 50px;">
                    <div class="py-5 text-center">
                        <div class="alert alert-success" role="alert">
                            【メッセージサンプル】登録しました。
                        </div>

                        <div style="margin-bottom:20px;">
                            <form id="form" method="post" action="index.html">
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group row">
                                            <label for="lastKana" class="col-sm-2 col-form-label">姓かな</label>
                                            <div class="col-sm-6">
                                                <input type="text" class="form-control" name="last_kana" placeholder="姓かな" />
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label for="firstKana" class="col-sm-2 col-form-label">名かな</label>
                                            <div class="col-sm-6">
                                                <input type="text" class="form-control" name="first_kana" placeholder="名かな" />
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label for="firstName" class="col-sm-2 col-form-label">性別</label>
                                            <div class="col-sm-10 text-left">
                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="checkbox" name="gender1" value="1" />
                                                    <label class="form-check-label" for="inlineCheckbox1">男</label>
                                                </div>
                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="checkbox" name="gender2" value="2" />
                                                    <label class="form-check-label" for="inlineCheckbox2">女</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label for="prefId" class="col-sm-2 col-form-label">都道府県</label>
                                            <div class="col-sm-3">
                                                <select class="custom-select d-block" name="pref_id">
                                                    <option value=""></option>
                                                    <option value="1">北海道</option>
                                                    <option value="2">青森県</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>

                            <div class="form-group">
                                <button type="button" id="search" class="btn btn-primary" style="width:150px"><i class="fas fa-search pr-1"></i> 検索</button>
                            </div>
                            <div class="alert alert-warning" role="alert">
                                【メッセージサンプル】該当データが見つかりません。
                            </div>
                            <div class="form-group row">
                                <a  class="btn btn-success" href="create.html" style="width:150px"><i class="fas fa-chalkboard-teacher pr-1"></i> 新規登録</a>
                            </div>
                        </div>

                        <div class="row">
                            <table class="table table-bordered table-hover">
                                <thead class="thead-dark">
                                    <tr>
                                        <th scope="col">ID</th>
                                        <th scope="col">名前</th>
                                        <th scope="col">かな</th>
                                        <th scope="col">性別</th>
                                        <th scope="col">郵便番号</th>
                                        <th scope="col">メールアドレス</th>
                                        <th scope="col">作成日時</th>
                                        <th scope="col">更新日時</th>
                                        <th scope="col"></th>
                                    </tr>
                                </thead>
                                <tbody id="content">
                                    <tr>
                                        <td scope="col">{data.id}</td>
                                        <td scope="col"><a href="detail.html">{data.last_name}　{data.first_name}</a></td>
                                        <td scope="col">{data.last_kana} {data.first_kana}</td>
                                        <td scope="col">{data.gender == 1 ? 男 : 女}</td>
                                        <td scope="col">{data.post_code}</td>
                                        <td scope="col">{data.email}</td>
                                        <td scope="col">{data.created_at}</td>
                                        <td scope="col">{data.updated_at}</td>
                                        <td scope="col"><a class="btn btn-info" href="edit.html">編集</a></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            );
        });
    }
}