import React, { Component } from 'react'

export class Data extends Component {
    constructor(props) {
        super(props)

        this.state = {

            id: '',
            firstname: '',
            lastname: '',
            btn: 'Save',
            addProperty: 'initial',
            property: 'none',
            data: [],
        }

    }


    dataChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        let id;
        if (this.state.data.length === 0) {
            id = 0;
        }
        else {
            let length = this.state.data.length;
            let prevId = this.state.data[length - 1];
            id = prevId.id + 1;
        }
        const form = {
            id: id,
            firstname: this.state.firstname,
            lastname: this.state.lastname
        }
        this.state.data.push(form);
        this.setState({
            firstname: '',
            lastname: '',

        })
    }




    onEdit = (id) => {
        console.log("id comes in editttttt===>", id)
        // let obj = this.state.data[id];
        // console.log(obj)
        // console.log("firstname=====>>>>",obj.firstname)
        // console.log("lasstname=====>>>>",obj.lastname)

        console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@")
        let z = this.state.data.filter(x => x.id === id);
        console.log("Z object", z)
        console.log(`z id ${z[0].id}`)
        console.log("z firstname", z[0].firstname)
        // console.log(this.state.firstname)
        this.setState({
            id: z[0].id,
            firstname: z[0].firstname,
            lastname: z[0].lastname,
            btn: 'update',
            property: 'initial',
            addProperty: 'none',
        })
        // console.log(data)    
    }

    updateData = () => {

        // console.log("Click on updated function",id);
        //console.log("iddddsss=>>>>>>", this.state.id)
        //console.log('@@@@@@@@@@@@@@@@@@@@@@@', ids)
     
        // firstname = this.state.firstname,
        // lastname = this.state.lastname
        let id = this.state.id;
        // let firstname = this.state.firstname;
        // let lastname = this.state.lastname;
        // console.log("form",form)
        // console.log('----',id)
        // console.log('----',firstname)
        // console.log('----',lastname)  
        let z = this.state.data.filter(x => x.id === id);

        z[0].firstname = this.state.firstname;
        z[0].lastname = this.state.lastname;
        this.setState({
            firstname: z[0].firstname,
            lastname: z[0].lastname
        })

    }

    onDelete = (id) => {

        this.setState(this.state.data.splice(id, 1))

    }

    render() {


        return (


            <div>
                <label>
                    first name:
                    <input name='firstname' value={this.state.firstname} onChange={e => this.dataChange(e)} />
                </label>
                <label>
                    lastname:
                    <input name='lastname' value={this.state.lastname} onChange={e => this.dataChange(e)} />
                </label>
                <button onClick={(e) => this.onSubmit(e)} style={{ display: this.state.addProperty }} >Add</button>
                <button onClick={(e) => this.updateData(e)} style={{ display: this.state.property }}>Update</button>
                <table>
                    <thead>
                        <tr>
                            <th>firstname</th>
                            <th>lastname</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.data.map((item, index) => <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.firstname}</td>
                            <td>{item.lastname}</td>
                            <td><button onClick={() => this.onEdit(item.id)}>Edit</button></td>
                            <td><button onClick={(id) => this.onDelete(item.id)}>Delete</button></td>
                        </tr>)}
                    </tbody>
                </table>
                {/* <h2>{nameList}</h2> */}
            </div>
        );
    }
}



export default Data
