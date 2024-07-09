import React, { useEffect, useState } from "react";
import { Button } from "antd";
import { SYSTEM_CLS_PREFIX } from "@/const";
import { getPoisonousChickenSoup } from "@/api/relaxing-moment";
import "./index.scss";

const prefix = `${SYSTEM_CLS_PREFIX}-poisonous-chicken-soup-wrapper`;

interface WordInfo {
  content: null | string;
}

function PoisonousChickenSoup() {
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [wordInfo, setWordInfo] = useState<WordInfo>({
    content: ""
  });

  useEffect(() => {
    getPrisonousChickenSoup();
  }, []);

  const getPrisonousChickenSoup = async () => {
    try {
      setLoading(true);
      setDisabled(true);
      const res = await getPoisonousChickenSoup();
      setLoading(false);
      setTimeout(() => {
        setDisabled(false);
      }, 10000);
      setWordInfo(res?.result);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  const handleClick = () => {
    getPrisonousChickenSoup();
  };

  return (
    <div className={prefix}>
      <div className={`${prefix}-title`}>
        毒鸡汤
        <span>（每次调用的频率为10S/次）</span>
      </div>
      <div className={`${prefix}-container`}>
        <div className="content">{wordInfo?.content}</div>
        <div className="operate">
          <Button type="primary" onClick={handleClick} loading={loading} disabled={disabled}>
            再来一碗
          </Button>
        </div>
      </div>
    </div>
  );
}

export default PoisonousChickenSoup;
