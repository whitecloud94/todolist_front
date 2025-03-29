import React from "react";
import {useNavigate} from "react-router-dom";
import {Button} from "@/components/ui/button";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import styles from "/src/styles/Entrance.module.css";

const Entrance: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className={styles.appContainer}>
            <div className={styles.card}>
                <div className={styles.title}> TODO - LIST </div>
                <br/>
                <div className={styles.description}>
                    안녕하세요. <br /> 버튼을 눌러 입장하세요.
                </div>
                <Button className={styles.customButton} onClick={() => navigate("/dashboard")}>
                    입장하기
                </Button>
            </div>
        </div>
    );
};

export default Entrance;