import { View, Text, TextInput, Button, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import * as Network from 'expo-network';



const Item =({name,email,bidang, onPress, onDelete})=>{
    return(
        <View>
        <View>
            <Button onPress={onPress} title='Edit'/>
            <Button onPress={onDelete} title='Delete'/>
            <Text>Nama Lengkap : {name} </Text>
            <Text>Email : {email}</Text>
            <Text>Bidang : {bidang}</Text>
        </View>
      </View> 
    )
}



const LocalAPI = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [bidang, setBidang] = useState("");
    const [users, setUsers] = useState([]);
    const [button , setButton] = useState("Simpan");
    const [selected, setSelected]  = useState({});
    useEffect(()=>{
        getData();
    },[])

    const getData =()=>{
        axios.get("http://192.168.0.102:3000/User")
        .then((res)=>{
        setUsers(res.data)
        console.log(res.data);
    }
        )
        .catch((err)=>console.log(err))
    }

    const submit =async()=>{
        const ip = await Network.getIpAddressAsync();
        const data ={
            name,
            email,
            bidang
        }
        console.log("data before send:", ip);
        // ubah dulu host (sesuia ip) dan port di json web servernya
        // json-serve 192.168.x.xxx  
        if(button=="Simpan"){
            axios.post(`http://192.168.0.102:3000/User`,data)
            .then((res)=>{
                console.log(res)
                setBidang("");
                setEmail("");
                setName("");
                getData();
            })
            .catch((err)=>console.log(err))
        }else if(button == "Update"){
        axios.put(`http://192.168.0.102:3000/User/${selected.id}`,data)
        .then((res)=>{
            console.log(res)
            setBidang("");
            setEmail("");
            setName("");
            getData();
            setButton("Simpan")
        })
        .catch((err)=>console.log(err))
    }
    }

    const selectItem =(item)=>{
        setSelected(item);
        alert(selected.id)
        setEmail(item.email);
        setBidang(item.bidang);
        setName(item.name);
        setButton("Update")
    }

    const deleteData =(id)=>{
        axios.delete(`http://192.168.0.102:3000/User/${id}`)
        .then((res)=>{
            alert("data deleted")
            getData()
        })
        .catch((err)=>console.log(err))
    }

  return (
    <View style={{flex:1, alignItems:'center',justifyContent:'center'}}>
      <Text style={{marginBottom:12}}>Local API (JSON server) </Text>
      <TextInput placeholder='Nama Lengkap' style={styles.input} onChangeText={(value)=>setName(value)} value={name}/>
      <TextInput placeholder='Email' style={styles.input} onChangeText={(value)=>setEmail(value)} value={email}/>
      <TextInput placeholder='Bidang' style={styles.input} onChangeText={(value)=>setBidang(value)} value={bidang}/>
      <Button title={button} onPress={submit}/>
        {users.map(user=>{
            return <Item name={user.name} email={user.email} bidang={user.bidang} onPress={()=>selectItem(user)} onDelete={()=>deleteData(user.id)}/>
        })}
   </View>
  )
}

const styles = StyleSheet.create({
      container: { padding: 20},
      input :{borderWidth:1,marginBottom:12, borderRadius:25,paddingHorizontal:18}
    });
    

export default LocalAPI