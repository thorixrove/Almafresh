import ClearCompletedButton from "@/components/insight/ClearCompletedButton"
import InsightsCategorySection from "@/components/insight/InsightsCategorySection"
import InsightsPrioritySection from "@/components/insight/InsightsPrioritySection"
import InsightsStatsSection from "@/components/insight/InsightsStatsSection"
import SentryFeedbackButton from "@/components/insight/SentryFeedbackButton"
import UserProfile from "@/components/insight/UserProfile"
import TabScreenBackground from "@/components/TabScreenBackground"
import { ScrollView } from "react-native"

const InsightsScreen = () => {
  return (
    <>
    <ScrollView
    className="flex-1 bg-background py-4"
    showsVerticalScrollIndicator={false}
    contentContainerStyle={{ padding: 20, gap: 14}}
    contentInsetAdjustmentBehavior="automatic"
    >
      <TabScreenBackground/>

      <UserProfile/>
      <InsightsStatsSection/>
      <InsightsCategorySection/>
      <InsightsPrioritySection/>
      <ClearCompletedButton/>
    </ScrollView>
    <SentryFeedbackButton/>
    </>
  )
}

export default InsightsScreen