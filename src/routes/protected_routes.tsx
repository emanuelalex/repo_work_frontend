import { useState } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../authentication/authprovider";

export default function ProtectedRoute(){
    const auth = useAuth();

    return auth.isAuthenticated ? <Outlet/> : <Navigate to = "/" />;
    
}