import React, {useState, useEffect} from 'react'

import Header from '../../components/Header/Header'
import UsersList from '../../components/UsersList/UsersList'

const UsersPage = () => {
    const [usersData, setUsersData] = useState([])
    const [inputTextValue, setInputTextValue] = useState("")
    const [sortValue, setSortValue] = useState("")
    const [usersPost, setUsersPost] = useState([])

    const usersURL = 'https://jsonplaceholder.typicode.com/users'
    const postsURL = 'https://jsonplaceholder.typicode.com/posts'

    const urls = [
        'https://jsonplaceholder.typicode.com/users',
        'https://jsonplaceholder.typicode.com/posts'
    ]

    useEffect(() => {
        getData()
    }, [])

    const getData = async function() {
        const [users, posts] = await Promise.all(urls.map(url => 
            fetch(url)
                .then(response => response.json())
        ))
        
        const combinedUsersWithPosts = users.map(user => {
            user.posts = posts.filter(post => post.userId === user.id)
            return user
        })

        setUsersData(combinedUsersWithPosts)

        // console.log(usersData, 'TU POKAZUJE PUSTY ARRAY')

    }

    console.log(usersData)
    // useEffect(() => {
    //     fetch(usersURL)
    //         .then(response => response.json())
    //         .then(data => setUsersData(data))
    //     // fetch(postsURL)
    //     //     .then(response => response.json())
    //     //     // .then(data => setUsersPost(data))
    //     //     // .then(data => {
    //     //     //     const mappedUsers = usersData.map(user => {
    //     //     //         user.posts = data.filter(post => post.userId === user.id)
    //     //     //         return user
    //     //     //     })
    //     //     //     console.log(mappedUsers, 'ampped')
    //     //     //     setUsersPost(mappedUsers)
    //     //     // })
    //     //     .then(data => console.log(usersData, 'usersData'))
    // },[])

    // const mappedUsers = usersData.map(user => {
    //     user.posts = usersPost.filter(post => post.userId === user.id)
    // })

    // console.log(usersData, "mapped")

    // console.log(usersData)

    const filteredUsersList = inputTextValue ? usersData.filter(user => {
        return user.name.includes(inputTextValue) || user.username.includes(inputTextValue)
    }) : usersData

    const sortedUsersList = sortValue ? filteredUsersList.sort((prev, next) => {
        return prev[sortValue] > next[sortValue]
    }) : filteredUsersList


    const usersList = filteredUsersList.map(user => {
        return <UsersList user={user}/>
    })

    return (
        <>
        <Header inputTextValue={inputTextValue} setInputTextValue={setInputTextValue} setSortValue={setSortValue}/>
        {usersList}
        </>
    )
}

export default UsersPage;