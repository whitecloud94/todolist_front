import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {Button} from "@/components/ui/button";
import {X, ChevronRight} from "lucide-react"; // 아이콘 추가
import styles from "/src/styles/Main.module.css";

const Main: React.FC = () => {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(true);
    const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);

    const menuItems = [
        { label: "홈으로", path: "/" },
        { label: "대시보드", path: "/dashboard",
            children: [
                { label: "대시보드 테스트1", path: "#"},
                { label: "대시보드 테스트2", path: "#"}
            ]
        },
        {
            label: "설정",
            children: [
                { label: "사용자 관리", path: "/settings/users" },
                { label: "권한 설정", path: "/settings/permissions" },
            ]
        }
    ];

    return (
        <div className={styles.dashboardLayout}>
            <aside className={`${styles.sidebar} ${!isMenuOpen ? styles.closed : ""}`}>
                <div className={styles.sidebarHeader}>
                    <h2 className={styles.menuTitle}>📌 메뉴</h2>
                    <Button className={styles.menuToggle} onClick={() => setIsMenuOpen(false)}>
                        <X size={18} />
                    </Button>
                </div>

                {menuItems.map((item, index) => (
                    <div
                        key={index}
                        className={styles.menuSection}
                        onMouseEnter={() => setHoveredMenu(item.label)}
                        onMouseLeave={() => setHoveredMenu(null)}
                    >
                        <Button
                            className={styles.menuItem}
                            onClick={() => !item.children && navigate(item.path)}
                        >
                            <span className={styles.menuLabel}>{item.label}</span>
                            {item.children && (
                                <ChevronRight
                                    className={`${styles.chevronIcon} ${
                                        hoveredMenu === item.label ? styles.chevronOpen : ""
                                    }`}
                                    size={16}
                                />
                            )}
                        </Button>

                        {item.children && (
                            <div
                                className={`${styles.subMenu} ${
                                    hoveredMenu === item.label ? styles.subMenuOpen : ""
                                }`}
                            >
                                {item.children.map((child, idx) => (
                                    <Button
                                        key={idx}
                                        className={styles.subMenuItem}
                                        onClick={() => navigate(child.path)}
                                    >
                                        {child.label}
                                    </Button>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </aside>
        </div>
    );
};

export default Main;
