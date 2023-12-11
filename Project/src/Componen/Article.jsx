function Article(){
    const name = 'very'
    const titles = ['Tutorial React Js', 'Tutorial Next JS', 'Tutorial Node Js']


    return (
        <>
        <div>{name}</div>
        <div>
            {titles.map((titles) => {
                return (
            <>
                <div>{titles}</div>
             </>
            )
        })}
        </div>
      </>
    )
}
export default Article