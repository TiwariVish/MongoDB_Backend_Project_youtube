const asyncHandler = (requestHandler) => {
   return (req,res,next) =>{
        Promise.resolve(requestHandler(req,res,next)).catch((err) => next(err))
    }
}

export {asyncHandler}


















// This is Hight Order FUnction = > High order Function is called take as function in Arg

// const asyncHandler  = () => {}
// const asyncHandler  = (func) => {() => {}}
// const asyncHandler  = (func) => async() => {}



/* 
const asyncHandler  = (fn) => async(req, res,next) => {
try{
await fn(req,res.next)
}
catch (error){
res.status(err.code || 500).json({
    success : false,
    message : err.message
})
}
}
*/