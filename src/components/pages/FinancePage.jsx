import Layout from "../layout/Layout";
import Breadcrumb from "../breadcrump/Breadcrumb";
import Payout from "../Finance/Payout";
import ButtonTabs from "../tabs/ButtonTabs";
import SettlementHistory from "../Finance/SettlementHistory";

function FinancePage() {
  const breadCrumpData = [
    {
      name: "Finance",
      status: "active",
      link: "/finance",
    },
  ];

  const financeTab = [
    { id: "payout", title: "Payout", content: <Payout />, link: "payout" },
    // { id: "history", title: "History", content: <History />, link: "history" },
    { id: "settlements", title: "Settlemets", content: <SettlementHistory />, link: "settlements" },

  ];
  return (
    <Layout
      activeClassName="finance"
      id="menu-item2"
      //   id1="menu-items2"
    >
      <div className="page-wrapper">
        <div className="content">
          <Breadcrumb data={breadCrumpData} />
          <ButtonTabs tabData={financeTab} />
        </div>
      </div>
    </Layout>
  );
}

export default FinancePage;
